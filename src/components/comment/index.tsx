import {component$, useStylesScoped$} from '@builder.io/qwik'
import type {Comment} from '~/types'
import styles from './styles.css?inline'

type Props = {
  comment: Comment
}

export default component$((props: Props) => {
  useStylesScoped$(styles)

  return (
    <div class="container">
      <span class="body">{props.comment.body}</span>
      <div>
        <small>
          {props.comment.name} - {props.comment.email}
        </small>
      </div>
    </div>
  )
})
