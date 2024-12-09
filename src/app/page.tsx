export default function Home() {
  const verses = [
    {
      topic: 'Umut',
      surah: 'Zümer',
      ayah: '39:53',
      text: "De ki: Ey nefislerine karşı haddi aşan kullarım! Allah'ın rahmetinden ümit kesmeyin. Şüphesiz Allah bütün günahları bağışlar. Çünkü O, çok bağışlayandır, çok merhamet edendir.",
    },
    {
      topic: 'Gönül Darlığı',
      surah: 'İnşirah',
      ayah: '94:5-6',
      text: 'Demek ki, gerçekten zorlukla beraber bir kolaylık vardır. Evet, zorlukla beraber bir kolaylık vardır.',
    },
    {
      topic: 'Umut',
      surah: 'Bakara',
      ayah: '2:286',
      text: 'Allah hiçbir kimseye gücünün yettiğinden fazlasını yüklemez. Herkesin kazandığı iyilik kendi yararına, yaptığı kötülük de kendi zararınadır.',
    },
    {
      topic: 'Gönül Darlığı',
      surah: 'En’am',
      ayah: '6:125',
      text: "Allah kimi hidayete erdirmek isterse, onun göğsünü İslam'a açar. Kimi de saptırmak isterse, onun göğsünü daraltır, sıkıştırır; sanki göğe yükseliyormuş gibi.",
    },
    {
      topic: 'Umut',
      surah: 'Hicr',
      ayah: '15:56',
      text: 'O da dedi ki: Rabbimin rahmetinden, sapıklara düşmüş kimselerden başkası ümit kesmez.',
    },
    {
      topic: 'Gönül Darlığı',
      surah: 'Taha',
      ayah: '20:25-26',
      text: 'Musa dedi ki: Rabbim! Gönlümü aç, işimi kolaylaştır.',
    },
    {
      topic: 'Umut',
      surah: 'Talak',
      ayah: '65:2-3',
      text: "Kim Allah'a karşı gelmekten sakınırsa, Allah ona bir çıkış yolu açar ve onu hiç ummadığı yerden rızıklandırır.",
    },
    {
      topic: 'Gönül Darlığı',
      surah: 'Bakara',
      ayah: '2:155-156',
      text: 'Andolsun, sizi biraz korku, açlık, mallardan, canlardan ve ürünlerden eksiltme ile sınayacağız. Sabredenleri müjdele.',
    },
    {
      topic: 'Umut',
      surah: 'Yusuf',
      ayah: '12:87',
      text: "Allah'ın rahmetinden ümit kesmeyin. Çünkü kâfirler topluluğundan başkası Allah’ın rahmetinden ümit kesmez.",
    },
    {
      topic: 'Gönül Darlığı',
      surah: 'Şura',
      ayah: '42:30',
      text: 'Başınıza gelen herhangi bir musibet, kendi ellerinizin kazandığı şeyler yüzündendir. Bununla beraber Allah çoğunu affeder.',
    },
    {
      topic: 'Umut',
      surah: 'Hud',
      ayah: '11:9',
      text: 'Eğer biz insana rahmetimizi tattırır da sonra onu elinden alırsak, hiç şüphesiz o ümitsiz ve nankör olur.',
    },
    {
      topic: 'Gönül Darlığı',
      surah: 'Bakara',
      ayah: '2:45',
      text: "Sabır ve namazla Allah'tan yardım dileyin. Bu, ancak huşu sahipleri için kolaydır.",
    },
    {
      topic: 'Umut',
      surah: 'Kehf',
      ayah: '18:10',
      text: 'Gençler mağaraya sığındıklarında şöyle dediler: Ey Rabbimiz! Bize tarafından bir rahmet ver ve bize şu işimizde başarı ve kurtuluş nasip et.',
    },
    {
      topic: 'Gönül Darlığı',
      surah: 'Nahl',
      ayah: '16:97',
      text: 'Kim iyi bir iş yaparsa, erkek olsun kadın olsun, ona hoş bir hayat yaşatırız ve mükafatlarını yaptıklarının en güzeliyle veririz.',
    },
    {
      topic: 'Umut',
      surah: 'Rum',
      ayah: '30:60',
      text: 'O halde sabret. Şüphesiz Allah’ın vaadi haktır. Sakın iman etmeyenler seni gevşekliğe düşürmesin.',
    },
    {
      topic: 'Gönül Darlığı',
      surah: 'Hud',
      ayah: '11:10',
      text: 'Eğer insana bir nimet tattırır, sonra da onu çekip alırsak, hiç şüphesiz o, ümitsizliğe düşer ve nankör olur.',
    },
    {
      topic: 'Umut',
      surah: 'Zuhruf',
      ayah: '43:13',
      text: 'Şüphesiz, Rabbiniz gerçekten çok bağışlayıcıdır ve çok merhamet edicidir.',
    },
    {
      topic: 'Gönül Darlığı',
      surah: 'Tevbe',
      ayah: '9:51',
      text: 'De ki: Bizim başımıza, Allah’ın bizim için yazdığından başkası gelmez. O, bizim sahibimizdir. Müminler yalnız Allah’a tevekkül etsinler.',
    },
    {
      topic: 'Umut',
      surah: 'Nur',
      ayah: '24:26',
      text: 'Güzel sözler ve güzel işler, güzel insanlar içindir. Güzel insanlar da güzel işler içindir.',
    },
    {
      topic: 'Gönül Darlığı',
      surah: 'Bakara',
      ayah: '2:216',
      text: 'Sizin hoşlanmadığınız bir şey, sizin için hayırlı olabilir; sizin sevdiğiniz bir şey de sizin için kötü olabilir. Allah bilir, siz bilmezsiniz.',
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-6xl text-center">Unutma</h2>
      <div>
        {verses.map((verse, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h2>{verse.topic}</h2>
            <p>
              <strong>Sure:</strong> {verse.surah} <br />
              <strong>Ayet:</strong> {verse.ayah}
            </p>
            <blockquote>{verse.text}</blockquote>
          </div>
        ))}
      </div>
    </div>
  );
}
