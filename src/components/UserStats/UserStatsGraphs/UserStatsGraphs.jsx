import React from 'react';
import './UserStatsGraphs.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const UserStatsGraphs = ({ data }) => {
  const graph = React.useMemo(
    () => data.map((item) => ({ x: item.title, y: Number(item.acessos) })),
    [data],
  );
  const total = graph.reduce((sum, item) => sum + item.y, 0);
  const numberFormatter = new Intl.NumberFormat('pt-BR');

  return (
    <section className="graph">
      <div className="graph-summary">
        <div className="graph-metric">
          <span>Total de acessos</span>
          <strong>{numberFormatter.format(total)}</strong>
        </div>
        <div className="graph-metric">
          <span>Publicações</span>
          <strong>{numberFormatter.format(data.length)}</strong>
        </div>
      </div>

      <div className="graph-item">
        <h2>Acessos por publicação</h2>
        <VictoryPie
          data={graph}
          innerRadius={65}
          padAngle={2}
          colorScale={[
            'var(--primary-1)',
            'var(--primary-hover)',
            'var(--primary-3)',
            'var(--primary-2)',
            'var(--black)',
          ]}
          padding={{ top: 35, bottom: 35, left: 55, right: 55 }}
          style={{ labels: { fill: 'var(--grey-2)', fontSize: 12 } }}
        />
      </div>

      <div className="graph-item">
        <h2>Comparativo de acessos</h2>
        <VictoryChart domainPadding={{ x: 30 }} padding={{ top: 30, bottom: 55, left: 55, right: 25 }}>
          <VictoryBar
            alignment="middle"
            data={graph}
            cornerRadius={{ top: 5 }}
            labels={({ datum }) => datum.y}
            style={{
              data: { fill: 'var(--primary-1)' },
              labels: { fill: 'var(--grey-2)', fontSize: 11 },
            }}
          />
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
