type Props = {
  params: { id: string };
};
export default function Page({ params: { id } }: Props) {
  return <>{id} 유저 페이지입니다</>;
}
