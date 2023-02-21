import type {ResourceCtx} from '@builder.io/qwik'
import {API_HOSTNAME} from '~/configuration/api'
import type {FetchParams} from '~/types'

const cleanupAbortController = <T,>(context: ResourceCtx<T>) => {
  const controller = new AbortController()

  context.cleanup(() => controller.abort())
}

export const fetchPosts = async () => {
  const response = await fetch(`${API_HOSTNAME}/posts`)
  return response.json()
}

export const fetchPostComments = async (postId: string) => {
  const response = await fetch(`${API_HOSTNAME}/posts/${postId}/comments`)
  return response.json()
}

export const fetchWithAbortController = async <T,>({
  context,
  fetchCallback
}: FetchParams<T>) => {
  cleanupAbortController<T>(context)

  return await fetchCallback()
}
