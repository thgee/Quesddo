import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";

type StopMovePageProps = {
  isPreventCondition: boolean;
};

export default function useBlockNavigation({
  isPreventCondition,
}: StopMovePageProps) {
  const router = useRouter();

  // 내부 링크 이동
  const handleRouteChange = useCallback(
    async (url: string) => {
      if (url === router.asPath) {
        return;
      }
      if (
        isPreventCondition &&
        !confirm("정말 나가시겠어요? 작성된 내용이 모두 삭제됩니다.")
      ) {
        router.replace(router.asPath);
      }
      return;
    },
    [isPreventCondition],
  );

  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events, handleRouteChange]);

  // 외부 링크 이동
  const handleBeforeUnload = useCallback(
    (e: BeforeUnloadEvent) => {
      // 페이지를 벗어나지 않아야 하는 경우
      if (isPreventCondition) {
        e.preventDefault();
        e.returnValue = true; // legacy 브라우저를 위해 추가
      }
    },
    [isPreventCondition],
  );

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [handleBeforeUnload]);

  return {};
}
