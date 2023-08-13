import { useRouter } from "next/router";

export default function() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>Token ID: {id}</h1>
    </div>
  );
}