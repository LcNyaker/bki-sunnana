import Button from '@/app/components/buttons/Button'
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'

type TextContentLink = {
  url: string
  text: string
}

type TextContentProps = {
  title?: string
  undertitle?: string
  bodyText?: string
  link?: TextContentLink
  textClass?: string
  imageLeft?: boolean
}

export const TextContent = ({
  title,
  undertitle,
  bodyText,
  link,
  textClass,
  imageLeft,
}: TextContentProps) => {
  return (
    <section
      className={clsx(
        'order-2 md:order-[unset] flex items-center',
        textClass,
        imageLeft ? 'section-content-left' : 'section-content-right',
      )}
    >
      <article className="py-6 lg:py-8">
        <div className="">
          {title && <h2 className="truncate">{title}</h2>}
          {undertitle && (
            <p className="mt-2 text-sm font-semibold uppercase text-neutral-500 truncate">
              {undertitle}
            </p>
          )}
          {bodyText && <p className="mt-4 text-lg line-clamp-4 lg:line-clamp-5">{bodyText}</p>}

          {link && (
            <Button
              className="mt-4 flex gap-2"
              href={link.url}
              variant="secondary"
              aria-label={`Läs mer om ${title}`}
            >
              {link.text}
              <ArrowRightIcon size={20} />
            </Button>
          )}
        </div>
      </article>
    </section>
  )
}

export default TextContent
