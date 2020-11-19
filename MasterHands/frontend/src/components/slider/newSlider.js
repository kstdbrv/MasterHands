import React from 'react';
import Group1 from '../../assets/images/Group1.jpg'
import Group2 from '../../assets/images/Group2.jpg'
import Group3 from '../../assets/images/Group3.jpg'
import './newSlider.scss';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props)
    const last = this.items.length - 1;
    this.state = {
      last,
      slide: 0,
      next: 1,
      prev: last,
      moving: true
    }
    this.movePrev = this.movePrev.bind(this);
    this.moveNext = this.moveNext.bind(this);
    this.moveToSlide = this.moveToSlide.bind(this);
    this.disableInteraction = this.disableInteraction.bind(this);
  }


  componentDidMount() {
    let interval = setInterval(() => {
      this.moveNext();
    }, 4000)
    this.setState({ interval })
  }

  componentWillUnmount() {

    if (this.state.moving) {
      clearInterval(this.state.interval)
    }

  }

  moveNext() {
    if (this.state.moving) {
      let { slide, last, next, prev } = this.state;
      prev = slide;
      slide = next;
      next = next + 1 > last ? 0 : next + 1;
      this.setState({ next, slide, prev }, this.disableInteraction);

    }
  }

  movePrev() {
    if (this.state.moving) {
      let { slide, last, next, prev } = this.state;
      next = slide;
      slide = prev;
      prev = prev - 1 < 0 ? last : prev - 1;
      this.setState({ next, slide, prev }, this.disableInteraction);

    }
  }

  moveToSlide(index) {
    if (this.state.moving) {
      const { last } = this.state;
      const slide = index;
      const next = slide + 1 > last ? 0 : slide + 1;
      const prev = slide - 1 < 0 ? last : slide - 1;
      this.setState({ next, slide, prev }, this.disableInteraction);
    }
  }

  disableInteraction() {
    this.setState(
      { moving: false }
    )

    setTimeout(() => {
      this.setState({ moving: true });
    }, 10);

  }

  items = [
    Group2,
    Group1,
    Group3
  ];

  p = [
    'Стоимость работы указана в договоре не изменится на месте. Материалы докупим за отдельную плату.',
    'Компенсируем ущерб, в случае непредвиденной поломки.',
    'Работаем прозрачно. Подпишите договор с мастером перед началом работ. Мы предоставляем гарантию на 12 месяцев.'
  ]

  render() {
    let { items, p } = this;
    const { slide, next, prev } = this.state;

    const fotos = items.map((el, i) => {
      let carouselClass = 'carousel_photo';
      switch (i) {
        case slide:
          carouselClass += ' active';
          break;

        case next:
          carouselClass += ' next';
          break;

        case prev:
          carouselClass += ' prev';
          break;
      }
      return (
        <img className={carouselClass} src={el} key={i} alt="" />
      )
    }
    )

    const dots = items.map((el, i) => <span className={i == slide ? "slider-dots-item active" : "slider-dots-item"} key={i} onClick={() => { this.moveToSlide(i) }} />);
    return (
      <section id="gallery" className="carousel-wrapper">
        <div className="carousel">
          <p className={'carousel_text'}>{p[this.slide]}</p>
          {fotos}
        </div>
        <div className="slider-dots">
          {dots}
        </div>
      </section>
    );
  }
}

