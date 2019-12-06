export const series: Object[] = [
    { field: "price", title: "Price" },
    { field: "pe", title: "PE Ratio" },
    { field: "volume", title: "Volume" },
    { field: "volume_avg", title: "Avg Volume" },
    { field: "market_cap", title: "Market Cap" },
    { field: "day_change", title: "Day Change" },
    { field: "change_pct", title: "% Change" }
];

export const seriesTypes: any = {
    simpleSeries: [
        "Bar", "Stack Bar", "100% Stack Bar", "Column", "Stack Column", "100% Stack Column", "Area", "Stack Area", "100% Stack Area", 'Line', "Radar"
    ],
    complexSeries: ["Scatter", "Bubble"],
    circularSeries: ["Pie", "Donut"]
};

export const menuItems: Object[] = [
    {text:'Charts', items:[{
        text: "Bar",
        items: [{ text: "Bar" }, { text: "Stack Bar" }, { text: "100% Stack Bar" }]
      },
      {
        text: "Column",
        items: [
          { text: "Column" },
          { text: "Stack Column" },
          { text: "100% Stack Column" }
        ]
      },
      {
        text: "Area",
        items: [
          { text: "Area" },
          { text: "Stack Area" },
          { text: "100% Stack Area" }
        ]
      },
      {
        text: "Pie",
        items: [{ text: "Pie" }, { text: "Donut" }]
      },
      { text: "Line" },
      { text: "Radar" },
      { text: "Scatter" },
      { text: "Bubble" }
    ],
    icon: 'k-icon k-i-validation-data'},
    {text: 'Export Excel', icon:'k-icon k-i-excel'}

  ];

export const stocksInPortfolio = [
    {
        symbol: "AAN",
        name: "Aaron's, Inc.",
        price: 76.61,
        day_change: -1.18,
        change_pct: -1.52,
        volume: 710442,
        volume_avg: 837114,
        market_cap: 5174814208,
        pe: 25.94,
        intraday: [
            77.77,
            77.48,
            77.47,
            77.22,
            77.29,
            76.9,
            76.69,
            76.65,
            76.69,
            76.82,
            76.75,
            76.81,
            76.87,
            76.84,
            76.7,
            76.65,
            76.44,
            76.29,
            76.42,
            76.32,
            76.2,
            75.94,
            75.87,
            75.8,
            75.99,
            76.09,
            75.8,
            75.82,
            75.91,
            75.84,
            75.85,
            76.01,
            75.99,
            75.92,
            75.99,
            76.06,
            76.06,
            76.11,
            76.17,
            76.18,
            76.17,
            76.13,
            76.04,
            75.88,
            75.72,
            75.69,
            75.92,
            75.99,
            76.04,
            76.07,
            76.03,
            75.95,
            75.75,
            75.58,
            75.8,
            75.87,
            75.93,
            76.08,
            75.95,
            76.01,
            76.05,
            76.07,
            76.16,
            76.21,
            76.2,
            76.38,
            76.41,
            76.43,
            76.38,
            76.51,
            76.7,
            76.65,
            76.71,
            76.68,
            76.65,
            76.46,
            76.53,
            76.59
        ]
    },
    {
        symbol: "AAPL",
        name: "Apple Inc.",
        price: 246.58,
        day_change: 2.49,
        change_pct: 1.02,
        volume: 15827692,
        volume_avg: 20028962,
        market_cap: 1114344259584,
        pe: 20.94,
        intraday: [
            243.75,
            243.54,
            243.32,
            243.47,
            243.74,
            243.43,
            243.34,
            243.39,
            243.47,
            243.66,
            243.68,
            244.43,
            244.53,
            244.25,
            244.16,
            243.93,
            244.41,
            244.69,
            244.52,
            244.52,
            244.62,
            244.88,
            245.07,
            245.7,
            245.31,
            245.34,
            245.48,
            245.54,
            245.28,
            245.43,
            245.41,
            245.2,
            245.33,
            245.31,
            245.34,
            245.56,
            245.59,
            245.47,
            245.1,
            245.18,
            245.29,
            245.24,
            245.35,
            245.26,
            245.16,
            245.38,
            245.31,
            245.3,
            245.3,
            245.25,
            245.39,
            245.45,
            245.38,
            245.37,
            245.25,
            244.81,
            245.05,
            245.07,
            245.1,
            245.2,
            245.18,
            245.13,
            245.18,
            245.35,
            245.34,
            245.31,
            245.39,
            245.46,
            245.57,
            245.65,
            245.67,
            245.76,
            245.68,
            245.77,
            245.79,
            245.86,
            245.9,
            246.24
        ]
    },
    {
        symbol: "ACN",
        name: "Accenture plc",
        price: 183.07,
        day_change: -0.77,
        change_pct: -0.42,
        volume: 1369124,
        volume_avg: 1892150,
        market_cap: 116597284864,
        pe: 24.87,
        intraday: [
            184.08,
            184.36,
            183.49,
            183.77,
            183.74,
            183.57,
            183.62,
            183.76,
            184.13,
            183.95,
            183.99,
            184.16,
            184.05,
            183.85,
            183.81,
            183.84,
            184.4,
            184.34,
            184.4,
            184.32,
            184.24,
            184.45,
            184.5,
            184.54,
            184.52,
            184.55,
            184.58,
            184.71,
            184.63,
            184.74,
            184.58,
            184.29,
            184.13,
            184.12,
            184.1,
            184.11,
            184.21,
            184.21,
            184.11,
            184.05,
            184.06,
            184,
            183.94,
            183.9,
            183.89,
            183.9,
            183.94,
            183.83,
            183.9,
            183.75,
            183.73,
            183.78,
            183.78,
            183.92,
            183.9,
            183.75,
            183.87,
            183.87,
            183.83,
            183.81,
            183.7,
            183.4,
            183.42,
            183.53,
            183.53,
            183.6,
            183.64,
            183.5,
            183.46,
            183.51,
            183.54,
            183.62,
            183.59,
            183.66,
            183.54,
            183.4,
            183.24,
            183.31
        ]
    },
    {
        symbol: "ADBE",
        name: "Adobe Inc.",
        price: 270.98,
        day_change: 2.93,
        change_pct: 1.09,
        volume: 1511852,
        volume_avg: 3342325,
        market_cap: 131175735296,
        pe: 48.22,
        intraday: [
            267.66,
            267.8,
            268.63,
            269.04,
            269.44,
            269.13,
            269.3,
            269.95,
            270.13,
            269.81,
            269.9,
            270.2,
            270.35,
            270.2,
            270.14,
            270.33,
            271.13,
            270.73,
            270.55,
            270.31,
            270.46,
            271.06,
            271.54,
            271.31,
            270.86,
            270.97,
            271.18,
            271.33,
            271.16,
            271.29,
            271.11,
            270.73,
            270.61,
            270.82,
            271.02,
            270.95,
            271.18,
            271.07,
            270.96,
            271.03,
            271.02,
            270.95,
            270.91,
            270.93,
            270.88,
            271.06,
            271.03,
            270.89,
            271.02,
            270.95,
            271.04,
            270.74,
            270.86,
            270.57,
            270.85,
            270.68,
            270.63,
            270.59,
            270.59,
            270.7,
            270.82,
            270.35,
            270.53,
            270.73,
            270.76,
            271,
            271.06,
            270.64,
            270.65,
            270.79,
            270.88,
            270.88,
            270.9,
            271.02,
            270.77,
            270.72,
            270.68,
            270.59
        ]
    },
    {
        symbol: "AGM",
        name: "Federal Agricultural Mortgage Corporation",
        price: 84.57,
        day_change: 0.17,
        change_pct: 0.2,
        volume: 22444,
        volume_avg: 22114,
        market_cap: 890445952,
        pe: 9.46,
        intraday: [
            84.42,
            84.87,
            84.87,
            84.02,
            84.02,
            84.18,
            84.11,
            83.5,
            82.7,
            82.7,
            82.97,
            82.97,
            82.97,
            83.08,
            83.08,
            83.29,
            83.29,
            83.01,
            83.01,
            83.21,
            83.21,
            83.18,
            83.38,
            83.08,
            83.08,
            83.34,
            83.34,
            83.39,
            83.39,
            83.35,
            83.35,
            83.32,
            83.32,
            83.28,
            83.28,
            83.28,
            83.58,
            83.58,
            83.58,
            83.26,
            83.26,
            83.49,
            83.49,
            84.52,
            84.52,
            84.1,
            84.1,
            84.1,
            83.41,
            84.77,
            83.53,
            83.53,
            83.92,
            83.92,
            83.76,
            83.76,
            84.44,
            84.44,
            84.44,
            84.33,
            84.72,
            84.59
        ]
    },
    {
        symbol: "AMZN",
        name: "Amazon.com, Inc.",
        price: 1779.99,
        day_change: 17.78,
        change_pct: 1.01,
        volume: 2173743,
        volume_avg: 3771314,
        market_cap: 882513674240,
        pe: 78.87,
        intraday: [
            1762.22,
            1762,
            1763.11,
            1768.61,
            1768.02,
            1766.44,
            1764.64,
            1766.46,
            1767.14,
            1768.17,
            1767.75,
            1769.02,
            1768.68,
            1771.99,
            1771.46,
            1774.6,
            1778.5,
            1778.76,
            1776.4,
            1773.73,
            1774.49,
            1771.65,
            1772.55,
            1773.22,
            1773.5,
            1770.94,
            1769.19,
            1770.69,
            1771.39,
            1772.2,
            1770.41,
            1771.65,
            1769.62,
            1769.5,
            1769.54,
            1768.72,
            1768.31,
            1767.99,
            1767.33,
            1766.14,
            1765.66,
            1765.45,
            1765.79,
            1765.99,
            1767.82,
            1767.14,
            1768.4,
            1768.29,
            1767.83,
            1767.51,
            1769.12,
            1767.93,
            1768.07,
            1768.5,
            1769.81,
            1769.46,
            1775.4,
            1774.97,
            1772.7,
            1771,
            1768.94,
            1769.56,
            1774.53,
            1775.34,
            1778.57,
            1779.69,
            1780.34,
            1779.24,
            1778.32,
            1780,
            1781,
            1779.16,
            1778.02,
            1777.22,
            1777.04,
            1778.57,
            1780.24,
            1780
        ]
    },
    {
        symbol: "ASML",
        name: "ASML Holding N.V.",
        price: 263.99,
        day_change: 1.26,
        change_pct: 0.48,
        volume: 549797,
        volume_avg: 1164687,
        market_cap: 110834614272,
        pe: 37.94,
        intraday: [
            262.8,
            262.63,
            262.18,
            261.98,
            262.34,
            262.23,
            262.23,
            262.21,
            262.78,
            262.62,
            262.75,
            262.74,
            262.88,
            262.85,
            263.11,
            263,
            263.38,
            263.45,
            263.63,
            263.23,
            263.45,
            263.16,
            263.29,
            263.48,
            263.52,
            263.89,
            264.08,
            264.5,
            264.54,
            264.38,
            263.95,
            263.82,
            263.78,
            263.93,
            264.13,
            264.16,
            263.97,
            263.94,
            264,
            263.84,
            263.98,
            263.95,
            264.11,
            264.15,
            264.26,
            264.06,
            264.49,
            264.02,
            264.08,
            264.6,
            264.65,
            264.27,
            264.36,
            263.92,
            263.75,
            264.29,
            264.09,
            264.24,
            264.33,
            263.92,
            263.77,
            263.74,
            264.02,
            263.88,
            263.82,
            263.79,
            263.6,
            263.43,
            263.58,
            263.57,
            263.61,
            263.55,
            263.57,
            263.41,
            264.06
        ]
    },
    {
        symbol: "AVGO",
        name: "Broadcom Inc.",
        price: 289.82,
        day_change: 5.87,
        change_pct: 2.07,
        volume: 1987976,
        volume_avg: 1691400,
        market_cap: 114963193856,
        pe: 40.79,
        intraday: [
            283.88,
            284.32,
            284.93,
            284.65,
            285.68,
            285.99,
            286.07,
            285.96,
            286.29,
            286.21,
            286.29,
            286.64,
            286.62,
            286.22,
            286.17,
            285.92,
            286.8,
            286.83,
            287.17,
            287.14,
            287.66,
            287.87,
            287.92,
            288.42,
            288.4,
            288.42,
            288.8,
            288.9,
            289.24,
            289.27,
            288.96,
            288.16,
            288.27,
            288.4,
            288.8,
            288.8,
            289.16,
            288.92,
            288.97,
            289.09,
            289.16,
            288.75,
            288.88,
            289.1,
            289.4,
            290.08,
            290.01,
            290.26,
            290.67,
            290.22,
            290.47,
            290.91,
            290.79,
            291.15,
            291.27,
            290.16,
            290.1,
            289.79,
            290.02,
            290.05,
            290.03,
            289.9,
            289.92,
            290.29,
            290.22,
            290.28,
            290.24,
            290.46,
            290.64,
            290.62,
            290.67,
            290.61,
            290.63,
            290.19,
            290.01,
            290.2,
            289.89,
            289.75
        ]
    },
    {
        symbol: "BNPQY",
        name: "BNP Paribas SA",
        price: 26.43,
        day_change: 0.43,
        change_pct: 1.65,
        volume: 103645,
        volume_avg: 193571,
        market_cap: 66021871616,
        pe: null,
        intraday: [
            26,
            25.97,
            25.97,
            25.98,
            25.95,
            25.95,
            25.89,
            25.91,
            25.89,
            25.85,
            25.91,
            25.93,
            25.89,
            25.94,
            25.94,
            25.94,
            25.94,
            25.91,
            25.9,
            25.89,
            25.92,
            25.97,
            25.97,
            25.94,
            25.94,
            25.94,
            25.94,
            25.99,
            26.07,
            26.07,
            26.01,
            26.01,
            26.04,
            26.03,
            26.03,
            26.03,
            25.99,
            25.99,
            26.08,
            26.08,
            26.06,
            26.05,
            26.05,
            26.05,
            25.99,
            25.99,
            25.99,
            26.06,
            25.99,
            26.02,
            26.05,
            26.05,
            26,
            26,
            26,
            25.98,
            26,
            26,
            26.03,
            26.11,
            26.22,
            26.26,
            26.36,
            26.41,
            26.41,
            26.29,
            26.41,
            26.4,
            26.35,
            26.35,
            26.42,
            26.43,
            26.43
        ]
    },
    {
        symbol: "CACC",
        name: "Credit Acceptance Corporation",
        price: 439.2,
        day_change: -0.69,
        change_pct: -0.16,
        volume: 57324,
        volume_avg: 84857,
        market_cap: 8255554560,
        pe: 13.4,
        intraday: [
            439.4,
            438.08,
            438.08,
            438.57,
            438.57,
            439.86,
            439.86,
            440.89,
            440.89,
            439.95,
            439.95,
            440,
            440.8,
            440.58,
            439.52,
            439.03,
            438.46,
            437.69,
            437.29,
            438.59,
            437.05,
            437.25,
            437.34,
            438.89,
            438.89,
            438.89,
            440,
            438.22,
            437.41,
            438.13,
            438.14,
            437.57,
            437.14,
            436.77,
            436.77,
            437.89,
            437.31,
            437.31,
            437.09,
            437.09,
            436.91,
            436.91,
            437.43,
            437.43,
            437.22,
            437.22,
            436.83,
            436.47,
            436.47,
            436.82,
            436.82,
            438.84,
            438.84,
            437.4,
            437.4,
            438.35,
            438.35,
            438.2,
            439.57,
            440.49,
            438.99,
            438.67,
            440.14,
            439.22,
            439.77,
            439.77,
            439.25,
            439.43,
            438.9,
            439.24,
            438.69,
            438.71
        ]
    }
];
