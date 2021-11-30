import { TreeGrid } from '../../src/common/extJSComponents/TreeGrid';
import {ExtJS} from "../../src/definition/ExtJS";

declare global {
	namespace Cypress {
		interface Chainable<Subject> {
			getTreeGridByTestId(treeGridTestId: string, option?: WaitUntilOptions): Chainable<TreeGrid>
			selectTreeGridRowByIndex(rowIndex: number): Chainable<TreeGrid>
			treeGridDeleteRecordByRowIndex(rowIndex: number): Chainable<TreeGrid>
			treeGridDeleteRecordByKeyValue(key: string, value: string | number): Chainable<TreeGrid>
			expandTreeGridRowByIndex(rowIndex: number): Chainable<TreeGrid>
			expandTreeGridRowByKeyValue(key: string, value: string | number): Chainable<TreeGrid>
			clickYesOrNoColumnRowByIndex(rowIndex: number, btnYesOrNoTestId: string): Chainable<TreeGrid>
		}
	}
}

Cypress.Commands.add('getTreeGridByTestId', (treeGridTestId: string, option?: WaitUntilOptions) => {
	return cy.getExtJS().then((Ext) => {
		return cy.wrap(new TreeGrid(treeGridTestId, Ext))
			.then($component => $component.waitUntilIsReady({ ...option }))
	})
})

Cypress.Commands.add('expandTreeGridRowByIndex', { prevSubject: true },(treeGrid: TreeGrid, rowIndex: number) => {
	return cy.wrap(treeGrid)
		.invoke('expandRowByIndex',rowIndex)
		.then(() => cy.wait(500).wrap(treeGrid))
})

Cypress.Commands.add('expandTreeGridRowByKeyValue', { prevSubject: true },(treeGrid: TreeGrid, key: string, value: string | number) => {
	return cy.wrap(treeGrid)
		.invoke('expandRowByRecordKeyValue',key, value)
		.then(() => cy.wait(500).wrap(treeGrid))
})

Cypress.Commands.add('treeGridDeleteRecordByRowIndex', { prevSubject: true },(treeGrid: TreeGrid, rowIndex: number) => {
	return cy.wrap(treeGrid)
		.invoke('fireDeleteEventByRecordIndex',rowIndex)
		.then(() => {
			return cy.findByTestId('yes')
				.should('exist')
				.click()
				.then(() => {
					return cy.wrap(treeGrid)
				})
		})
})

Cypress.Commands.add('treeGridDeleteRecordByKeyValue', { prevSubject: true },(treeGrid: TreeGrid, key: string, value: string | number) => {
	return cy.wrap(treeGrid)
		.invoke('fireDeleteEventByRecordKeyValue', key, value)
		.then(() => {
			return cy.findByTestId('yes')
				.should('exist')
				.click()
				.then(() => {
					return cy.wrap(treeGrid)
				})
		})
})
Cypress.Commands.add('dblclickSelectedRowTree', { prevSubject: true },(grid: TreeGrid) => {
	return cy.wrap(grid)
		.invoke('getDom')
		.then($dom => {
			cy.waitUntil(() => grid.getExtJSCmp().getSelected().length > 0, { timeout: 20000})
				.waitUntil(() => grid.getExtJSCmp().getStore().indexOf(grid.getExtJSCmp().getSelected().items[0]) >= 0, { timeout: 20000})
				.then(() => {
					let rowIndex = grid.getExtJSCmp().getStore().indexOf(grid.getExtJSCmp().getSelected().items[0]);
					cy.wrap($dom)
						.find(`[data-recordindex="${rowIndex}"]`)
						.dblclick()
				})
		}).wrap(grid)
})
Cypress.Commands.add('selectGridRowByIndexTree', { prevSubject: true },(grid: TreeGrid, rowIndex: number, keepExisting?:boolean) => {
	return cy.wrap(grid)
		.invoke('selectRecordByIndex',rowIndex, keepExisting)
		.then(() => {
			return cy.wait(500).wrap(grid)
		})
})

Cypress.Commands.add('clickYesOrNoColumnRowByIndex', { prevSubject: true },(treeGrid: TreeGrid, rowIndex: number, btnYesOrNoTestId: string) => {
	const recordInternalId = treeGrid.getStore<ExtJS.TreePanel>().getAt(rowIndex)
	return cy.findByTestId(btnYesOrNoTestId+'-'+recordInternalId.internalId)
		.should('exist')
		.scrollIntoView()
		.should('be.visible')
		.click()
		.then(() => cy.wait(500).wrap(treeGrid))
})

export {}
