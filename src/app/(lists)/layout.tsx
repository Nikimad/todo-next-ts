import Banner from "@/components/Banner";

const ListsLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <Banner>{children}</Banner>
);

export default ListsLayout;
