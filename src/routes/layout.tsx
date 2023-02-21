import {component$, Slot} from '@builder.io/qwik'

export default component$(() => {
  return (
    <>
      <header>
        <h1>Qwik playground</h1>
      </header>
      <main>
        <section>
          <Slot />
        </section>
      </main>
    </>
  )
})
