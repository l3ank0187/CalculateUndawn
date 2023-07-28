// ฟังก์ชันคำนวณผลรวมทั้งหมดและราคารวมทั้งหมด (รวมภาษี 8%)
function calculateTotal() {
  const faxWhitePrice = parseFloat(document.getElementById('faxWhitePrice').value);
  const faxWhiteQuantity = parseInt(document.getElementById('faxWhiteQuantity').value);

  const animalLeatherPrice = parseFloat(document.getElementById('animalLeatherPrice').value);
  const animalLeatherQuantity = parseInt(document.getElementById('animalLeatherQuantity').value);

  const faxFiberWhitePrice = parseFloat(document.getElementById('faxFiberWhitePrice').value);
  const faxFiberWhiteQuantity = parseInt(document.getElementById('faxFiberWhiteQuantity').value);

  const mountainAnimalPrice = parseFloat(document.getElementById('mountainAnimalPrice').value);
  const mountainAnimalQuantity = parseInt(document.getElementById('mountainAnimalQuantity').value);

  const faxWhiteTotal = faxWhitePrice * faxWhiteQuantity;
  const animalLeatherTotal = animalLeatherPrice * animalLeatherQuantity;
  const faxFiberWhiteTotal = faxFiberWhitePrice * faxFiberWhiteQuantity;
  const mountainAnimalTotal = mountainAnimalPrice * mountainAnimalQuantity;

  const totalBeforeTax = faxWhiteTotal + animalLeatherTotal + faxFiberWhiteTotal + mountainAnimalTotal;
  const totalWithTax = (totalBeforeTax + (totalBeforeTax * 0.08)).toFixed(2);

  // แสดงผลราคาทั้งหมดและราคารวมทั้งหมด (รวมภาษี 8%)
  const faxWhiteResult = document.getElementById('faxWhiteResult');
  faxWhiteResult.textContent = 'ราคาทั้งหมด: ' + faxWhiteTotal.toFixed(2);

  const animalLeatherResult = document.getElementById('animalLeatherResult');
  animalLeatherResult.textContent = 'ราคาทั้งหมด: ' + animalLeatherTotal.toFixed(2);

  const faxFiberWhiteResult = document.getElementById('faxFiberWhiteResult');
  faxFiberWhiteResult.textContent = 'ราคาทั้งหมด: ' + faxFiberWhiteTotal.toFixed(2);

  const mountainAnimalResult = document.getElementById('mountainAnimalResult');
  mountainAnimalResult.textContent = 'ราคาทั้งหมด: ' + mountainAnimalTotal.toFixed(2);

  const totalResult = document.getElementById('totalResult');
  totalResult.textContent = 'ผลรวมทั้งหมด (รวมภาษี 8%): ' + totalWithTax;
}

// เพิ่ม Event Listener ให้กับ input เพื่อคำนวณอัตโนมัติเมื่อมีการเปลี่ยนแปลงค่า
document.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', calculateTotal);
});
