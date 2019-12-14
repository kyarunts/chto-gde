import { Component } from '@angular/core';
import { IQuestion, QUESTIONS, TEAMIDS, ITeam, TEAMS, IPlayer } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public questions: IQuestion[];
    public teams: ITeam[] = TEAMS;
    public selectedTeam: ITeam;
    public totalLevel: number;

    public selectTeam(team: ITeam) {
        this.selectedTeam = team;
        this.manageQuestions();
    }

    private manageQuestions() {
        this.questions = QUESTIONS.filter(q => q.teamID === this.selectedTeam.teamID);
        this.totalLevel = this.questions.reduce((initial, current) => {
            return initial+=current.level;
        }, 0);
    }
}
