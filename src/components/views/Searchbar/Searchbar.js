import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from '@material-ui/core/InputBase';

import './Searchbar.css';

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(0),
      },
    },
    input: {
      borderRadius: 2,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 14,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(0),
    },
  }));

function Searchbar(props) {
    const [Content, setContent] = useState("");
    const [Criterion, setCriterion] = useState("");
    const criteria = props.criteria;
    const classes = useStyles();

    useEffect(() => {
        // axios로 데이터 가져오기
    }, [, ])

    const onSearchHandler = (e) => {
        setContent(e.target.value);
    }

    const onCriteriaHandler = (e) => {
        setCriterion(e.target.value);
    }

    const onSubmitHandler = () => {
        //axios로 데이터 요청
    }

    return (
        <div className="searchbar">
            <div className="criteria">
            <FormControl className={classes.margin}>
                <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={Criterion}
                onChange={onCriteriaHandler}
                input={<BootstrapInput />}>
                    { criteria.map((criterion, key) => {
                        return <MenuItem value={key}>{criterion}</MenuItem>
                    })}
                </Select>
            </FormControl>
            </div>
            <input type="text" size="60" className="search" placeholder="Search" onChange={onSearchHandler} />
            <button type="submit" onClick={onSubmitHandler} className="submit">검색</button>
        </div>
    )
}

export default Searchbar
