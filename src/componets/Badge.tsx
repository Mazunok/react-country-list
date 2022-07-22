import { BadgeLabel, Color } from "../types";

export interface IBadge {
  label: BadgeLabel;
  value: number;
  color: Color;
}

export const Badge = ({ color, label, value }: IBadge) => {
  return (
    <p className={`badge bg-${color} col-2 p-2 fs-6`}>
      {label}: {value}
    </p>
  );
};
