import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Card,
  Heading,
  Column,
  Row,
  Accordion,
} from "@oliasoft-open-source/react-ui-library";
import { sitesLoaded } from "store/entities/sites/sites";
import styles from "./sites.module.less";

const Sites = ({ list, loading, sitesLoaded }) => {
  const [expandedSites, setExpandedSites] = React.useState(false);
  const toggleSites = () => {
    setExpandedSites((prev) => !prev);
  }
  return (
    <Card heading={<Heading>List of oil sites</Heading>}>
      <Row>
        <Column width={200}>
          <Button
            label="Load sites"
            onClick={sitesLoaded}
            loading={loading}
            disabled={loading}
          />
        </Column>
        <Column>
          <div className={styles.sitesList}>
            {list.length ? (
              <ul>
                {list.map((site, i) => (
                  <Accordion
                    key={i}
                    heading={site.name}
                    managed
                    bordered
                    onClick={() => toggleSites()}
                  >
                      <>
                      <>Country: </>
                     {site.country}
                      <br />
                      { site.oilRigs.length ? (
                        <>
                        <>Rigs:</>
                        <ul>
                          {site.oilRigs.map((rig, id) => (<li key={id}>{rig}</li>))}
                        </ul>
                        </>
                      ) : (
                        <>No rigs found</>
                      )}
                    </>
                  </Accordion>
                ))}
              </ul>
            ) : (
              <em>None loaded</em>
            )}
          </div>
        </Column>
      </Row>
    </Card>
  );
};

const mapStateToProps = ({ entities }) => {
  const { sites } = entities;
  return {
    loading: sites.loading,
    list: sites.list,
  };
};

const mapDispatchToProps = {
  sitesLoaded,
};

const ConnectedSites = connect(mapStateToProps, mapDispatchToProps)(Sites);
export { ConnectedSites as Sites };
