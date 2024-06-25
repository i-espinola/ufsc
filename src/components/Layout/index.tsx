type LayoutType = {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutType) => {
  return (
    <>
      <div>{children}</div>
		</>
	)
}

export default Layout;
export { Layout };
