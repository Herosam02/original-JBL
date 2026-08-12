import { renderShell, initShell } from '../layout.js'
const html = `<section class="page-section" style="padding-top:130px"><h2>Page content coming soon</h2></section>`
document.querySelector('#app').innerHTML = renderShell('Page', html)
initShell()
