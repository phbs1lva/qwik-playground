import {component$, useStylesScoped$} from '@builder.io/qwik'
import type {Post} from '~/types'
import styles from './styles.css?inline'

type Props = {
  post: Post
}

export default component$((props: Props) => {
  useStylesScoped$(styles)

  return (
    <div class="container">
      <div class="title">{props.post.title}</div>
      <span class="body">{props.post.body}</span>
    </div>
  )
})
