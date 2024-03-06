import { TableHead } from "./TableHead";
import { Table } from "@component";
import { movements } from "@data/movements";
import { TablePartner } from "./TablePartner";
import { TableAmount } from "./TableAmount";
import { TableMovementType } from "./TableMovementType";
import { TableStatus } from "./TableStatus";
import { TableDate } from "./TableDate";
import { Link } from "react-router-dom";

export function RecentMovementsTable() {
  return (
    <Table.Root className="">
      <caption className="caption-bottom mt-4 text-sm">
        <Link to={"/"} className="hover:brightness-125">
          click here to see full movements history
        </Link>
      </caption>
      <TableHead />
      <Table.Body>
        {movements.map((mov) => {
          const { amount, completed, currency, date, partner, type } = mov;
          return (
            <Table.Row>
              <Table.DataCell>
                <TableMovementType type={type} />
              </Table.DataCell>
              <Table.DataCell>
                <TableAmount
                  amount={amount}
                  conversion={currency.amount}
                  currency={currency.type}
                />
              </Table.DataCell>
              <Table.DataCell>
                <TablePartner {...partner} />
              </Table.DataCell>
              <Table.DataCell>
                <TableDate day={date.day} year={date.year} />
              </Table.DataCell>
              <Table.DataCell>
                <TableStatus isCompleted={completed} />
              </Table.DataCell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table.Root>
  );
}
