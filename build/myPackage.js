// JSDoc 코멘트는 맨 위에 //@ts-check를 작성하고 함수 위에 /** */ 이런식으로 자동완성 되는 형식에 작성하면 된다.
// JSDoc 코멘트 환경설정 방법 1. ts-check 2. tsconfig.json에 allowJs:true 3. 코멘트 작성
// @ts-check
/**
 * 프로젝트를 초기화 한다.
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
    return true;
}
/**
 * 프로그램을 종료시킨다.
 * @param {number} code
 * @returns number
 */
export function exit(code) {
    return code + 1;
}
