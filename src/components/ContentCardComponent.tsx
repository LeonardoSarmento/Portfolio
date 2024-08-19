import { Badge } from '@components/ui/badge';
import { Card, CardDescription, CardFooter, CardHeader } from '@components/ui/card';
import { ScrollArea } from '@components/ui/scroll-area';
import { Link, LinkOptions } from '@tanstack/react-router';
import { useAuth } from '@services/hooks/auth';
import { CopyToClipboardRoute } from '@services/utils/utils';
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu';
import { Button } from '@components/ui/button';
import { DROPDOWNMENUCONTENT } from '@constants/dropdown-share';
import { handleDeleteContent } from '@services/utils/toasts';
import { cn } from '@lib/utils';
import { PublicationType } from '@services/types/Publication';

type TBaseContentCard = {
  content: PublicationType;
  index: number;
  path: LinkOptions;
  className?: string;
};
type TContentCard =
  | ({
      dropdownMenu?: false;
    } & TBaseContentCard)
  | ({
      editPath: LinkOptions;
      URL: string;
      dropdownMenu?: true;
    } & TBaseContentCard);
export function ContentCardComponent(props: TContentCard) {
  return (
    <Card className={cn('p-2 text-center', props.className)}>
      <Link
        className="flex flex-col"
        to={props.path.to}
        params={{ projectId: props.content.id, postId: props.content.id }}
        // mask={{ to: '/posts/$postId', params: { postId: post.id } }}
      >
        <img className="aspect-video rounded-md" src={props.content.thumbnail} />
        <CardHeader className="h-28">{props.content.title}</CardHeader>
        <ScrollArea className="h-16 rounded-md">
          <div className="flex flex-wrap gap-2 px-4">
            {props.content.tags
              ? props.content.tags.map((tag) => (
                  <Badge key={tag.value} className="w-14 justify-center">
                    <p className="text-xs">{tag.value}</p>
                  </Badge>
                ))
              : null}
          </div>
        </ScrollArea>
        <ScrollArea className="m-2 h-28 rounded-md">
          <CardDescription>{props.content.description}</CardDescription>
        </ScrollArea>
        <CardFooter className={`flex ${!props.dropdownMenu ? 'justify-center' : 'justify-between'}`}>
          <p className="text-center">{props.content.date.toLocaleDateString()}</p>
          {props.dropdownMenu ? (
            <DropdownMenuComponent
              editable={props.content.editable}
              id={props.content.id}
              path={props.editPath.to}
              URL={props.URL}
            />
          ) : null}
        </CardFooter>
      </Link>
    </Card>
  );
}

function DropdownMenuComponent({
  id,
  path,
  editable,
  URL,
}: {
  id: string;
  path: LinkOptions['to'];
  editable?: boolean;
  URL: string;
}) {
  const auth = useAuth();
  const dropdownMenuContent = DROPDOWNMENUCONTENT();
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" onClick={(e) => e.preventDefault()} type="button">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{dropdownMenuContent.title}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={(e) => {
              e.stopPropagation(), CopyToClipboardRoute(`${URL}/${id}`);
            }}
          >
            {dropdownMenuContent.share}
          </DropdownMenuItem>
          {auth.isAuthenticated ? (
            <>
              {editable === false ? null : (
                <Link to={path} params={{ projectId: id, postId: id }}>
                  <DropdownMenuItem>
                    {dropdownMenuContent.edit}
                    {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                  </DropdownMenuItem>
                </Link>
              )}
              <DropdownMenuItem
                onClick={(e) => {
                  e.stopPropagation(), handleDeleteContent();
                }}
              >
                {dropdownMenuContent.delete}
              </DropdownMenuItem>
            </>
          ) : null}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}