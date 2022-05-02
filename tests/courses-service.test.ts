import { expect } from "chai";
import { CoursesService } from '../api/services/courses-service';
import mock1 from '../mocks/courses1.json';
import mock2 from '../mocks/courses2.json';
import mock3 from '../mocks/courses3.json';
import mock4 from '../mocks/courses4.json';
import mock5 from '../mocks/courses5.json';

describe('Courses Service', () => {
    it('Get sorted courses with mock 1', () => {
        const coursesService = new CoursesService();
        const response = coursesService.getCourses(mock1);
        const expectedResponse = [
            "Finance",
            "Investment",
            "PortfolioTheories",
            "PortfolioConstruction",
            "InvestmentManagement",
            "InvestmentStyle"
        ];
        expect(response).length(6);
        expect(response).to.eql(expectedResponse);
        //expect(response[0]).equals("Finance");
    });

    it('Get sorted courses with mock 2', () => {
        const coursesService = new CoursesService();
        const response = coursesService.getCourses(mock2);
        const expectedResponse = [
            "Finance",
            "Investment",
            "PortfolioTheories",
            "PortfolioConstruction",
            "InvestmentManagement",
            "InvestmentStyle"
        ];
        expect(response).length(6);
        expect(response).to.eql(expectedResponse);
    });

    it('Get sorted courses with mock 3', () => {
        const coursesService = new CoursesService();
        const response = coursesService.getCourses(mock3);
        const expectedResponse = [
            'Finance',
            'Investment',
            'PortfolioTheories',
            'InvestmentManagement',
            'InvestmentStyle'
        ];
        expect(response).length(5);
        expect(response).to.eql(expectedResponse);
    });

    it('Get sorted courses with mock 4', () => {
        const coursesService = new CoursesService();
        const response = coursesService.getCourses(mock4);

        const expectedResponse = [
            'Finance',
            'Investment',
            'PortfolioTheories',
            'InvestmentManagement',
            'InvestmentStyle'
        ];
        expect(response).length(5);
        expect(response).to.eql(expectedResponse);
    });

    it('Get sorted courses with mock 5', () => {
        const coursesService = new CoursesService();
        const response = coursesService.getCourses(mock5);

        const expectedResponse = [
            'Investment',
            'PortfolioTheories',
            'InvestmentManagement',
            'InvestmentStyle'
        ];
        expect(response).length(4);
        expect(response).to.eql(expectedResponse);
    });
})