export default function Container({
  children,
  className = '',
  isDefaultClasses = true,
}: {
  children: React.ReactNode
  className?: string
  isDefaultClasses?: boolean
}) {
  const classes = isDefaultClasses
    ? `mx-auto max-w-7xl px-6 md:px-10 ${className}`
    : className
  return <div className={classes}>{children}</div>
}
