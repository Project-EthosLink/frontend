import { useRouter } from 'next/router';
import TokenGating from '../../components/TokenGating';

export default function () {
  const router = useRouter();
  const { id } = router.query;
  return <TokenGating id={id} />;
}
