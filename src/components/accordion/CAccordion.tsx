import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import "./style.css"

const CAccordion = () => {
    
    return (
        <>
            <Accordion className="custom-accordion custom-accordion--first">
                <AccordionSummary
                    expandIcon={"+"}
                    className='span-accordion-summary'
                    aria-controls="panel1-content"
                    id="panel1-header"

                >
                    <Typography component="span" className="accordion-summary-text">Q.外壁塗装は何年くらいで塗り替えが必要ですか？
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    10年
                </AccordionDetails>
            </Accordion>
            <Accordion className="custom-accordion">
                <AccordionSummary
                    expandIcon={"+"}
                    className='span-accordion-summary'
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span" className="accordion-summary-text">Q. 見積もりは無料ですか？</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded className="custom-accordion">
                <AccordionSummary
                    expandIcon={"+"}
                    className='span-accordion-summary'
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography component="span" className="accordion-summary-text">Q. 見積もり後に追加料金がかかることはありますか？</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
                <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                </AccordionActions>
            </Accordion>
            <Accordion className="custom-accordion">
                <AccordionSummary
                    expandIcon={"+"}
                    className='span-accordion-summary'
                    aria-controls="panel4-content"
                    id="panel4-header"
                >
                    <Typography component="span" className="accordion-summary-text">Q. 塗装工事の支払い方法はどのようになっていますか？</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion className="custom-accordion">
                <AccordionSummary
                    expandIcon={"+"}
                    className='span-accordion-summary'
                    aria-controls="panel5-content"
                    id="panel5-header"
                >
                    <Typography component="span" className="accordion-summary-text">Q. 塗装工事の支払い方法はどのようになっていますか？</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default CAccordion