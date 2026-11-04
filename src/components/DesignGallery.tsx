const artworks = [
  { title: '播客封面', src: '/assets/design-podcast.png', alt: '播客封面：蓝色飞鸟、黄色月牙与错位文字', square: true, width: 760, height: 765 },
  { title: '游戏封面', src: '/assets/design-game.png', alt: '游戏封面：我掉进了无限循环的怪物世界', square: false, width: 1159, height: 730 },
  { title: '头像', src: '/assets/design-avatar.jpg', alt: '头像作品：黑发角色手持火柴，胸前透出火光', square: true, width: 1254, height: 1254 },
  { title: '活动海报', src: '/assets/design-event.png', alt: '活动海报：咱们来吵架吧，红色扩音器与青蓝色文字', square: false, width: 1101, height: 600 },
];

export default function DesignGallery() {
  return (
    <section className="design-showcase" aria-labelledby="design-title">
      <div className="design-showcase-inner">
        <p className="design-context">内容策划</p>
        <h2 id="design-title">设计图展示</h2>
        <span className="design-title-mark" aria-hidden="true" />
        <div className="design-gallery">
          {artworks.map((artwork, index) => (
            <figure className={`design-artwork ${artwork.square ? 'design-artwork-square' : ''}`} key={artwork.src}>
              <div className="design-artwork-image">
                <img src={artwork.src} alt={artwork.alt} width={artwork.width} height={artwork.height} loading="lazy" />
              </div>
              <figcaption><span className="design-artwork-number">{String(index + 1).padStart(2, '0')}</span>{artwork.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
