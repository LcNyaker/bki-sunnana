import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import Link from 'next/link'

type TextContentLink = {
  url: string
  text: string
}

type TextContentProps = {
  title?: string
  bodyText?: string
  link?: TextContentLink
  textClass?: string
  buttonClass?: string
}

export const TextContent = ({
  title,
  bodyText,
  link,
  textClass,
  buttonClass,
}: TextContentProps) => {
  return (
    <div className={clsx('order-2 md:order-[unset] flex items-center justify-center', textClass)}>
      <div className="py-6 lg:py-8 section-wrapper">
        {title && <h2 className="mb-6">{title}</h2>}
        {bodyText && <p>{bodyText}</p>}

        {link && (
          <Link
            href={link.url}
            className={clsx('mt-8 inline-flex min-h-[3.5rem] items-center gap-3 px-6', buttonClass)}
          >
            <span>{link.text}</span>
            <ArrowRightIcon size={20} className="shrink-0" />
          </Link>
        )}
      </div>
    </div>
  )
}

export default TextContent
