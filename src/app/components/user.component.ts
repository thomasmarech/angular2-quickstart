import { Component } from '@angular/core';
import { PostsService, Post } from '../services/posts.service'

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: `user.component.html`,
    providers: [PostsService]
})
export class UserComponent  { 
    lastName: string;
    firstName: string;
    email: string;
    address: Address;
    skills: string[];
    showSkills: boolean;
    posts: Post[]

    constructor (private postsService: PostsService) {
        this.firstName = 'Thomas';
        this.lastName = 'Maréchal';
        this.email = 'thomas.marechal@meet-2.com';
        this.address = {
            street : 'Mauhin 6/c',
            city: '4608 Dalhem',
            country: 'BE'
        }
        
        this.showSkills = false;
        this.skills = [ 'Daddy', 'Soccer', 'MTB'];

        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
        })
    }

    toggleSkills() {
        this.showSkills = !this.showSkills;
    }

    submitSkill(newSkill: string) {
        this.skills.push(newSkill);
    }

    deletSkill(i: number) {
        this.skills.splice(i, 1);
    }
}
interface Address {
    street: string;
    city: string;
    country: string;
}
