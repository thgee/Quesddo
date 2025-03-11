import Head from "next/head";

interface QuesddoHeadProps {
  title?: string;
}
export default function QuesddoHead({ title }: QuesddoHeadProps) {
  const getTitle = (title?: string) => {
    const prefix = "퀘스또";
    return title ? `${prefix} | ${title}` : title;
  };

  return (
    <Head>
      <title>{getTitle(title)}</title>
    </Head>
  );
}
