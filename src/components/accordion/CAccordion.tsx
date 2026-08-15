import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './style.css';

const faqs = [
  {
    q: 'Q.外壁塗装は何年くらいで塗り替えが必要ですか？',
    a: '外壁塗装は一般的に10年程度が塗り替えの目安です。使用している塗料や立地条件によっても変わりますので、お気軽にご相談ください。',
  },
  {
    q: 'Q. 見積もりは無料ですか？',
    a: 'はい、お見積りは無料で承っております。現地調査からご提案までお気軽にお申し付けください。',
  },
  {
    q: 'Q. 見積もり後に追加料金がかかることはありますか？',
    a: '基本的にお見積り金額から追加料金は発生しません。工事中に想定外の劣化などが判明した場合は、必ず事前にご相談のうえ進めます。',
  },
  {
    q: 'Q. 塗装工事の支払い方法はどのようになっていますか？',
    a: '銀行振込・現金でのお支払いに対応しております。工事完了後のお支払いが基本ですが、詳細はお打ち合わせ時にご案内いたします。',
  },
  {
    q: 'Q.工事中のご近所への配慮はありますか？',
    a: '工事前にご近所へのご挨拶を行い、騒音・臭気などに配慮しながら施工いたします。安心してお任せください。',
  },
];

const CAccordion = () => {
  return (
    <section className="faq">
      {faqs.map((f, i) => (
        <Accordion
          key={i}
          className={`custom-accordion${i === 0 ? ' custom-accordion--first' : ''}`}
        >
          <AccordionSummary
            expandIcon={'+'}
            className="span-accordion-summary"
            aria-controls={`panel${i + 1}-content`}
            id={`panel${i + 1}-header`}
          >
            <Typography component="span" className="accordion-summary-text">
              {f.q}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>{f.a}</AccordionDetails>
        </Accordion>
      ))}
    </section>
  );
};

export default CAccordion;
