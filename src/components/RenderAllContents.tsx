import { Card, CardDescription, CardFooter, CardHeader } from '@components/ui/card';
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
import { ScrollArea } from '@components/ui/scroll-area';
import { Badge } from '@components/ui/badge';
import { PostType } from '@services/types/Post';
import { DROPDOWNMENUCONTENT } from '@constants/dropdown-share';
import { handleDeleteContent } from '@services/utils/toasts';

export function RenderAllContents({
  contents,
  path,
  editPath,
  URL,
}: {
  contents: PostType[];
  path: LinkOptions;
  editPath: LinkOptions;
  URL: string;
}) {
  return (
    <div className="col-span-11 grid grid-cols-12 gap-4">
      {contents.length > 0
        ? contents.map((content, index) => (
            <Card key={`${content.id}-${index}`} className="col-span-2 row-span-1 p-2 text-center">
              <Link
                className="flex flex-col"
                to={path.to}
                params={{ projectId: content.id, postId: content.id }}
                // mask={{ to: '/posts/$postId', params: { postId: post.id } }}
              >
                <img className="aspect-video rounded-md" src={content.thumbnail} />
                <CardHeader className="h-[100px]">{content.title}</CardHeader>
                <ScrollArea className="h-[75px] rounded-md">
                  <div className="grid grid-cols-3 gap-2 px-4">
                    {content.tags
                      ? content.tags.map((tag) => (
                          <Badge key={tag.value} className="col-span-1 justify-center">
                            {tag.value}
                          </Badge>
                        ))
                      : null}
                  </div>
                </ScrollArea>
                <ScrollArea className="h-28 rounded-md">
                  <CardDescription>{content.description}</CardDescription>
                </ScrollArea>
                <CardFooter className="flex justify-between">
                  <p className="text-center">{content.date.toLocaleDateString()}</p>
                  <DropdownMenuComponent editable={content.editable} id={content.id} path={editPath.to} URL={URL} />
                </CardFooter>
              </Link>
            </Card>
          ))
        : null}
    </div>
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
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" onClick={(e) => e.preventDefault()} type="button">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{DROPDOWNMENUCONTENT.title}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={(e) => {
              e.stopPropagation(), CopyToClipboardRoute(`${URL}/${id}`);
            }}
          >
            {DROPDOWNMENUCONTENT.share}
          </DropdownMenuItem>
          {auth.isAuthenticated ? (
            <>
              {editable === false ? null : (
                <Link to={path} params={{ projectId: id, postId: id }}>
                  <DropdownMenuItem>
                    {DROPDOWNMENUCONTENT.edit}
                    {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                  </DropdownMenuItem>
                </Link>
              )}
              <DropdownMenuItem
                onClick={(e) => {
                  e.stopPropagation(), handleDeleteContent();
                }}
              >
                {DROPDOWNMENUCONTENT.delete}
              </DropdownMenuItem>
            </>
          ) : null}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
