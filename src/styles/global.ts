import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css");
*{box-sizing:border-box}
body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, input, legend, li, ol, p, select, table, td, textarea, th, ul {margin:0;padding:0}
body, button, input, select, table, textarea {font-size:12px;line-height:16px;color:#202020;font-family:-apple-system, BlinkMacSystemFont, "Malgun Gothic", "맑은 고딕", helvetica, "Apple SD Gothic Neo", sans-serif}
h1, h2, h3, h4, h5, h6 {font-size:inherit;line-height:inherit}
textarea {-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:transparent;border:0;word-break:keep-all;word-wrap:break-word}
button, input {-webkit-border-radius:0;border-radius:0;border:0}
button {background-color:transparent}
fieldset, img {border:0}
img {vertical-align:top}
ol, ul {list-style:none}
address, em {font-style:normal}
a {display:flex;text-decoration:none;}
iframe {overflow:hidden;margin:0;border:0;padding:0;vertical-align:top}
mark {background-color:transparent}
i {font-style:normal}


#root {
	display: flex;
	flex-direction: column;
	overflow: hidden;
	min-height: 100vh;
}


// 초기 html 설정
html {
	background-color: #D4EBF8;
	display: flex;
	justify-content: center;
	align-items: center;

	-webkit-touch-callout: none;
    -webkit-tap-highlight-color:rgb(0 0 0 / 0%);
    scroll-behavior: smooth; 
}

body {
	width: 100%;
	max-width: 520px;
	overflow-x: hidden;
    background-color: white;
	scrollbar-width: none; 
	-ms-overflow-style: none;

	::-webkit-scrollbar {
    display: none;
}
}

*::-webkit-scrollbar {
  display: none;
}

* {
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
}

`;