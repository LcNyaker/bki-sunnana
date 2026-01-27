import { CaretRightIcon } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

type PageBreadcrumb = {
  doc?: string | object | null
  url?: string | null
  label?: string | null
  id?: string | null
}

type SlugBreadcrumb = {
  label: string
  href?: string
}

type BreadcrumbsProps = {
  breadcrumbs?: PageBreadcrumb[] | null
  items?: SlugBreadcrumb[]
}

const Breadcrumbs = ({ breadcrumbs, items }: BreadcrumbsProps) => {
  const crumbs =
    items ||
    breadcrumbs?.map((b) => ({
      label: b.label || 'Untitled',
      href: b.url || undefined,
    })) ||
    []

  if (crumbs.length === 0) return null

  return (
    <nav className="fixed top-[6.5rem] z-40 md:top-16 text-sm md:z-50 w-full flex justify-center md:bg-transparent bg-white">
      <ol
        className="
        flex items-center gap-2 section-wrapper py-2 md:justify-center"
      >
        <li>
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900  md:hover:text-white md:text-primary-500"
          >
            Hem
          </Link>
        </li>
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1
          return (
            <li key={index} className="flex items-center gap-2">
              <CaretRightIcon className="text-gray-600 md:text-primary-500" />
              {crumb.href && !isLast ? (
                <Link
                  href={crumb.href}
                  className="text-gray-600 hover:text-gray-900 md:hover:text-white md:text-primary-500"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gray-900 font-medium md:text-primary-500">{crumb.label}</span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
