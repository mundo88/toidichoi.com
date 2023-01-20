async function init () {
    const node = document.querySelector("#type-text")
    


    
    while (true) {
      await node.type('toidichoi.com - Du Lịch Dễ Dàng')
      await sleep(2000)
      await node.delete('toidichoi.com - Du Lịch Dễ Dàng')
      await node.type('Đi & Trải Nghiệm')
      await sleep(2000)
      await node.delete('Đi & Trải Nghiệm')
      await node.type('Thỏa Sức Đam Mê - Sống Hết Mình')
      await sleep(2000)
      await node.delete('Thỏa Sức Đam Mê - Sống Hết Mình')
      await node.type('Khám Phá Các Điểm Hẹn Hấp Dẫn')
      await sleep(2000)
      await node.delete('Khám Phá Các Điểm Hẹn Hấp Dẫn')
      await node.type('Bắt Chọn Khoảnh Khắc - Thể Hiện Cá Tính')
      await sleep(2000)
      await node.delete('Bắt Chọn Khoảnh Khắc - Thể Hiện Cá Tính')
    }
  }
  
  
  // Source code 🚩
  
  const sleep = time => new Promise(resolve => setTimeout(resolve, time))
  
  class TypeAsync extends HTMLSpanElement {
    get typeInterval () {
      const randomMs = 100 * Math.random()
      return randomMs < 50 ? 10 : randomMs
    }
    
    async type (text) {
      for (let character of text) {
        this.innerText += character
        await sleep(this.typeInterval)
      }
    }
    
    async delete (text) {
      for (let character of text) {
        this.innerText = this.innerText.slice(0, this.innerText.length -1)
        await sleep(this.typeInterval)
      }
    }
  }
  
  customElements.define('type-async', TypeAsync, { extends: 'span' })
  
  
  init()
  