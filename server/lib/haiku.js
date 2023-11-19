const adjs = [
    'sonbahar', 'gizli', 'acı', 'sisli', 'sessiz', 'boş', 'kuru', 'karanlık',
    'yaz', 'buzlu', 'narin', 'sessiz', 'beyaz', 'serin', 'ilkbahar', 'kış',
    'sabırlı', 'alacakaranlık', 'şafak', 'kızıl', 'ince', 'yıpranmış', 'mavi',
    'dalgalı', 'kırık', 'soğuk', 'nemli', 'düşüyor', 'buzlu', 'yeşil',
    'uzun', 'geç', 'kalan', 'cesur', 'küçük', 'sabah', 'çamurlu', 'eski',
    'kırmızı', 'sert', 'hareketsiz', 'küçük', 'parlak', 'zonklayan', 'utangaç',
    'Gezgin', 'solmuş', 'vahşi', 'siyah', 'genç', 'kutsal', 'yalnız',
    'Kokulu', 'yaşlı', 'karlı', 'gururlu', 'çiçekli', 'huzursuz', 'ilahi',
    'cilalı', 'eski', 'mor', 'canlı', 'isimsiz'
];

const nouns = [
    'şelale', 'nehir', 'esinti', 'ay', 'yağmur', 'rüzgar', 'deniz', 'sabah',
    'kar', 'göl', 'gün batımı', 'çam', 'gölge', 'yaprak', 'şafak', 'parıltı',
    'orman', 'tepe', 'bulut', 'çayır', 'güneş', 'açıklık', 'kuş', 'dere',
    'kelebek', 'çalı', 'çiy', 'toz', 'tarla', 'ateş', 'çiçek', 'ateşböceği',
    'tüy', 'çim', 'pus', 'dağ', 'gece', 'gölet', 'karanlık',
    'kar tanesi', 'sessizlik', 'ses', 'gökyüzü', 'şekil', 'sörf', 'gök gürültüsü',
    'menekşe', 'su', 'kır çiçeği', 'dalga', 'su', 'rezonans', 'güneş',
    'ahşap', 'rüya', 'kiraz', 'ağaç', 'sis', 'don', 'ses', 'kağıt',
    'kurbağa', 'duman', 'yıldız'
];

module.exports = () => {
  const adj = adjs[Math.floor(Math.random() * adjs.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const MIN = 1000;
  const MAX = 9999;
  const num = Math.floor(Math.random() * ((MAX + 1) - MIN)) + MIN;

  return `${adj}-${noun}-${num}`;
};
