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
            <Accordion>
                <AccordionSummary
                    expandIcon={"+"}
                    className='span-accordion-summary'
                    aria-controls="panel1-content"
                    id="panel1-header"

                >
                    <Typography component="span">外壁塗装は何年くらいで塗り替えが必要ですか？
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    10年
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={"+"}
                    className='span-accordion-summary'
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span">Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    className='span-accordion-summary'
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography component="span">Accordion Actions</Typography>
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
        </>
    )
}

export default CAccordion