import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import './tree.scss';
import Tree, {SourceItem} from "../../lib/tree/tree";
// import Icon from "../../lib/icon/icon";

const TreeExample = () => {
    const {t} = useTranslation();
    const [treeData] = useState([
        {
            key: 'item 1',
            value: 'item 1',
            children: [
                {
                    key: 'item 1.1',
                    value: 'item 1.1',
                    children: [
                        {
                            key: 'item 1.1.1',
                            value: 'item 1.1.1',
                        },
                    ]
                },
            ]
        },
        {
            key: 'item 2',
            value: 'item 2',
            children: [
                {
                    key: 'item 2.1',
                    value: 'item 2.1',
                },
            ]
        }
    ]);
    // const icon = <Icon name="arrow-up"/>
    const [selectedData, setSelectedData] = useState(['item 1.1', 'item 2.1', 'item 1.1.1']);
    const onCheckboxChange = (item: SourceItem, isChecked: boolean) => {
        if (isChecked) {
            setSelectedData([...selectedData, item.value])
        } else {
            setSelectedData(selectedData.filter(v => v !== item.value))
        }
    }
    return (
        <div>
            <div className={"example"}>
                <h4 className={"tree-title"}>
                    {t('basic_tree')}
                </h4>
                <div style={{width: '200px'}}>
                    <Tree sourceData={treeData} selected={selectedData} onChange={onCheckboxChange}/>
                </div>
            </div>
        </div>
    );
};

export default TreeExample;