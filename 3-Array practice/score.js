/**
 * @description 返回成绩表格 html 字符串
 * @param {array[][]} rows
 * @returns {string} html
 * 返回的字符串格式如下
 *  <tr>
        <td>学生姓名</td>
        <td>学生总分</td>
    </tr>
 */
function renderScoreTableRows(rows) {
  // your code here
  let str = "";
  rows.forEach((data) => {
    str += `
        <tr>
        <td>${data[0]}</td>
        <td>${data[1]}</td>
       </tr>
    `;
  });

  return str;
}
/**
 * @description 返回第一名列表 html 字符串
 * @param {array[][]} rows
 * @returns {string} html
 * 返回的字符串格式如下
 * <li>第一名：学生姓名，分数：学生分数</li>
 */
function printFirst(rows) {
  let highestScore = 0;
  let highestScorer = "";
  for (let i = 0; i < rows.length; i++) {
    const [name, score] = rows[i];
    if (parseInt(score) > highestScore) {
      highestScore = parseInt(score);
      highestScorer = name;
    }
  }
  return `<li>第一名：${highestScorer}，分数：${highestScore}</li>`;
}

/**
 * @description 返回最后一名列表 html 字符串
 * @param {array[][]} rows
 * * @returns {string} html
 * 返回的字符串格式如下
 * <li>最后一名：学生姓名，分数：学生分数</li>
 */
function printLast(rows) {
  //you code here
  let [last_name, last_score] = rows[rows.length - 1];
  return `<li>最后一名：${last_name}，分数：${last_score}</li>`;
}

/**
 * @description 返回平均分 html 字符串
 * @param {array[][]} rows
 * * @returns {string} html
 * 返回的字符串格式如下
 * <li>平均分:平均分分数</li>
 */
function printAverage(rows) {
  // your code here
  let totalScore = 0;
  for (let i = 0; i < rows.length; i++) {
    totalScore += parseInt(rows[i][1]);
  }
  return `<li>平均分:${(totalScore / rows.length).toFixed(2)}</li>`;
}
