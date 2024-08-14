import { Card, CardTitle } from '@components/ui/card';
import { Form } from '@components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createFileRoute } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { projectQueryOptions } from '@services/hooks/postQueryOptions';
import { EditProjectSchema, EditProjectType } from '@services/types/Project';
import { HEADERCARDPROJECTCONTENT, MANAGEMARKDOWNCONTENT } from '@constants/by-id-content';
import { HeaderThumbnailComponent, HeaderFormComponent, ManageMarkdownComponent } from '@components/ContentComponents';
import { handleDeleteContent, SubmitContent } from '@services/utils/toasts';
import { useAuth } from '@services/hooks/auth';

export const Route = createFileRoute('/_auth/projects/$projectId/edit')({
  loader: ({ context: { queryClient }, params: { projectId } }) =>
    queryClient.ensureQueryData(projectQueryOptions(projectId)),
  component: EditPostsComponent,
});

function EditPostsComponent() {
  const auth = useAuth();
  const project = Route.useLoaderData();
  const form = useForm<EditProjectType>({
    resolver: zodResolver(EditProjectSchema),
    mode: 'onChange',
    defaultValues: project,
  });

  const onSubmit = form.handleSubmit(() => {
    SubmitContent({ isAuthenticated: auth.isAuthenticated });
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <div className="mx-10 flex flex-col gap-4">
          <Card className="grid grid-cols-12 p-4 text-center">
            <CardTitle className="col-span-12 py-6 text-3xl">
              {form.getValues('title') ? form.watch('title') : HEADERCARDPROJECTCONTENT.title}
            </CardTitle>
            <HeaderThumbnailComponent form={form} textContent={HEADERCARDPROJECTCONTENT.thumbnail} />
            <HeaderFormComponent
              form={form}
              onClick={handleDeleteContent}
              textContent={HEADERCARDPROJECTCONTENT.form}
            />
          </Card>
          <ManageMarkdownComponent form={form} path="body" contentText={MANAGEMARKDOWNCONTENT} />
        </div>
      </form>
    </Form>
  );
}
