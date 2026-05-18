'use client';
import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    BarChart,
    Bar,
} from 'recharts';

type SettlementData = {
    name: string;
    ours: number;
    others: number;
};

interface SettlementComparisonProps {
    data?: SettlementData[];
}

export default function SettlementComparison({
    data = [],
}: SettlementComparisonProps): JSX.Element {
    const sample: SettlementData[] = data.length
        ? data
        : [
            { name: '1월', ours: 1.4, others: 1.7 },
            { name: '2월', ours: 1.3, others: 1.6 },
            { name: '3월', ours: 1.2, others: 1.55 },
            { name: '4월', ours: 1.25, others: 1.5 },
        ];

    return (
        <div className="grid md:grid-cols-2 gap-8">
            {/* 📈 라인차트 */}
            <div className="h-72 bg-white rounded-xl border border-mist shadow-[0_6px_20px_rgba(0,51,102,0.08)] p-4">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sample}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#fbfcfd" />
                        <XAxis dataKey="name" tick={{ fill: '#002b57' }} />
                        <YAxis tick={{ fill: '#002b57' }} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#fbfcfd',
                                border: '1px solid #d6e2ee',
                            }}
                        />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="ours"
                            name="SFIN 정산"
                            stroke="#003366"
                            strokeWidth={3}
                            dot={{ r: 5, stroke: '#003366', fill: '#003366' }}
                        />
                        <Line
                            type="monotone"
                            dataKey="others"
                            name="타사 정산"
                            stroke="#d6e2ee"
                            strokeWidth={2}
                            dot={{ r: 4, stroke: '#d6e2ee', fill: '#d6e2ee' }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* 📊 막대차트 */}
            <div className="h-72 bg-white rounded-xl border border-mist shadow-[0_6px_20px_rgba(0,51,102,0.08)] p-4">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sample}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#fbfcfd" />
                        <XAxis dataKey="name" tick={{ fill: '#002b57' }} />
                        <YAxis tick={{ fill: '#002b57' }} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#fbfcfd',
                                border: '1px solid #d6e2ee',
                            }}
                        />
                        <Legend />
                        <Bar
                            dataKey="ours"
                            name="SFIN 정산"
                            fill="#003366"
                            radius={[6, 6, 0, 0]}
                        />
                        <Bar
                            dataKey="others"
                            name="타사 정산"
                            fill="#d6e2ee"
                            radius={[6, 6, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
