import {component$, Resource, useResource$} from '@builder.io/qwik'
import type {DocumentHead} from '@builder.io/qwik-city'
import {Link} from '@builder.io/qwik-city'
import {fetchPosts, fetchWithAbortController} from '~/resources'
import type {Post} from '~/types'
import PostComponent from '../components/post'

export default component$(() => {
  const postsResource = useResource$<Post[]>(context =>
    fetchWithAbortController<Post[]>({context, fetchCallback: fetchPosts})
  )

  return (
    <div>
      <Resource
        value={postsResource}
        onPending={() => <p>Loading...</p>}
        onResolved={posts => (
          <>
            {posts.map(post => (
              <Link href={`/posts/${post.id}`}>
                <PostComponent key={post.id} post={post} />
              </Link>
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
