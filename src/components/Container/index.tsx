export default function Container({
  children,
  className = '',
  isDefaultClasses = true, // if set to false it rewrite default classes
}: {
  children: React.ReactNode
  className?: string
  isDefaultClasses?: boolean
}) {
  const classes = isDefaultClasses
    ? `mx-auto max-w-7xl px-6 ${className}`
    : className
  return <div className={classes}>{children}</div>
}
