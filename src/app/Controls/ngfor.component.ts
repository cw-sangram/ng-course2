import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ForExampleComponent } from './for-example.component';
@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html'
})
export class NgforComponent implements OnInit {

  episodes = [
    { title: 'Winter Is Coming', director: 'Tim Van Patten', id:0 },
    { title: 'The Kingsroad', director: 'Tim Van Patten', id:1  },
    { title: 'Lord Snow', director: 'Brian Kirk', id:20   },
    { title: 'Cripples, Bastards, and Broken Things', director: 'Brian Kirk', id:3   },
    { title: 'The Wolf and the Lion', director: 'Brian Kirk', id:4   },
    { title: 'A Golden Crown', director: 'Daniel Minahan', id:5   },
    { title: 'You Win or You Die', director: 'Daniel Minahan', id:6   },
    { title: 'The Pointy End', director: 'Daniel Minahan', id:7   }
    ];

    newEpisodes = [
      { title: 'Inception', director: 'Christophar Nolan', id:8 },
      { title: 'bbb', director: 'Tim Van Patten', id:9  },
      { title: 'ccc', director: 'Brian Kirk', id:10   },
      { title: 'ddd', director: 'Brian Kirk', id:11   },
      ];
  constructor() { }

  addEpisode(){
    // Creating a new object from existing array to simulate real time scenerio when API will
    // fetch the new results
    let newEpisodes = JSON.parse(JSON.stringify(this.episodes));
    this.episodes = [...newEpisodes, this.newEpisodes.pop()];
    // Check console and you can see the whole array is getting created and added to the dom
    // Now add trackby paramter and see the difference that only new parameter which has been created is added

  }

  trackEpisodes(index:number, episode:any) : number{
    return episode.id;
  }
  ngOnInit() {
  }

}
