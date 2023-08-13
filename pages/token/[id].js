import { useRouter } from 'next/router';

export default function () {
  const router = useRouter();
  const { id } = router.query;
  return (
    <TokenGating id={id} />
  );
}
