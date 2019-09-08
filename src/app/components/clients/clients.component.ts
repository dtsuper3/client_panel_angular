import { Component, OnInit, DoCheck } from "@angular/core";
import { ClientService } from "../../services/client.service";
import { Client } from "../../models/Client";
@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.css"]
})
export class ClientsComponent implements OnInit {
  clients: any[];
  totalOwed: number;
  loading: boolean = true;
  constructor(public clientService: ClientService) {}

  ngOnInit() {
    this.clientService.getClients().subscribe(clients => {
      // console.log(clients);
      if (clients.length > 0 || clients.length === 0) {
        this.loading = false;
      }
      this.clients = clients;
      this.getTotalOwed();
    });
  }
  ngDoCheck() {
    setTimeout(() => (this.loading = false), 5000);
  }
  getTotalOwed() {
    let total: number = 0;
    for (let i = 0; i < this.clients.length; i++) {
      total += parseFloat(this.clients[i].balance);
    }
    this.totalOwed = total;
  }
}
