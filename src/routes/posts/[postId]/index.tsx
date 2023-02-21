import {component$, Resource, useResource$} from '@builder.io/qwik'
import type {DocumentHead} from '@builder.io/qwik-city'
import {Link} from '@builder.io/qwik-city'
import {useLocation} from '@builder.io/qwik-city'
import CommentComponent from '~/components/comment'
import {fetchPostComments, fetchWithAbortController} from '~/resources'
import type {Comment} from '~/types'

export default component$(() => {
  const location = useLocation()
  const commentsResource = useResource$<Comment[]>(context =>
    fetchWithAbortController<Comment[]>({
      context,
      fetchCallback: () => fetchPostComments(location.params.postId)
    })
  )

  return (
    <div>
      <Link href="/">Go back</Link>
      <Resource
        value={commentsResource}
        onPending={() => <p>Loading...</p>}
        onResolved={comments => (
          <>
            {comments.map(comment => (
              <CommentComponent comment={comment} />
            ))}
          </>
        )}
      />
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Qwik Playground',
  meta: [
    {
      name: 'description',
      content: 'Simple playground to test a few things'
    }
  ]
}
