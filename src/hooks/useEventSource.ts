import { useEffect, useRef } from "react";
import { EventSourcePolyfill, MessageEvent } from "event-source-polyfill"; // Polyfill 사용

type EventSourceCallback = (data: any) => void;

export const useEventSource = (
  url: string,
  onMessageCallback: EventSourceCallback
) => {
  const eventSource = useRef<null | InstanceType<typeof EventSourcePolyfill>>(
    null
  );
  const reconnectAttempt = useRef<number>(0); // 재연결 시도 횟수

  useEffect(() => {
    if (!url) return; // URL이 없으면 초기화하지 않음

    const createEventSource = () => {
      if (eventSource.current) return; // 중복 생성 방지

      eventSource.current = new EventSourcePolyfill(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`, // 기본 Authorization 헤더
        },
        withCredentials: true, // 쿠키와 함께 요청
      });

      // 메시지 수신 핸들러
      eventSource.current.onmessage = function (
        this: EventSource,
        ev: MessageEvent
      ) {
        console.log("Received data:", ev.data);

        try {
          const parsedData = JSON.parse(ev.data); // JSON 파싱
          onMessageCallback(parsedData); // 데이터 콜백 호출
        } catch (error) {
          console.error("Failed to parse data:", ev.data);
        }
      };

      // 연결 열림 핸들러
      eventSource.current.onopen = () => {
        console.log("EventSource 연결완료");
        reconnectAttempt.current = 0; // 연결 성공 시 재연결 시도 횟수 초기화
      };

      // 에러 핸들러
      eventSource.current.onerror = () => {
        console.error("EventSource encountered an error");
        eventSource.current?.close();
        eventSource.current = null;

        // 최대 재연결 시도 횟수 설정 (예: 10회)
        if (reconnectAttempt.current < 10) {
          const retryTimeout = Math.min(
            1000 * 2 ** reconnectAttempt.current,
            30000
          ); // 지수적 백오프 (최대 30초)
          reconnectAttempt.current += 1;

          setTimeout(createEventSource, retryTimeout);
        } else {
          console.error("EventSource 재연결 시도 횟수 초과");
        }
      };
    };

    // EventSource 초기화
    createEventSource();

    // 컴포넌트 언마운트 시 정리
    return () => {
      if (eventSource.current) {
        eventSource.current.close();
        eventSource.current = null;
      }
    };
  }, [url, onMessageCallback]); // 의존성 배열
};
