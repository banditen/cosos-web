import type { landingContent } from '@/content/landing'

type TestimonialsContent = (typeof landingContent)['testimonials']

export function Testimonials({ content }: { content: TestimonialsContent }) {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">
            Social proof
          </p>
          <h2 id="testimonials-heading" className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            {content.title}
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="group flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg"
            >
              <blockquote className="text-base leading-relaxed text-slate-600">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
