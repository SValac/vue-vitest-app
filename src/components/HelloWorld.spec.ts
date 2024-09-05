import { describe, it, vi } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue';
import { expect } from 'vitest';
import axios from 'axios';

// mock axios
vi.mock('axios');

describe('HelloWorld Test suites', () => {
	/* 	// make fetch global and spy on it
	globalThis.fetch = vi.fn();
	it('should call fetch with correct url depending on msg property', async () => {
		// Given the HelloWorld component is mounted
		const instance = shallowMount(HelloWorld);
		// When the msg property changes
		//   note: we use await here to wait for the msg property to change
		await instance.setProps({ msg: 'test' });

		
    //in this case we also await for the next tick so that the fetch is called after the msg change
    //await instance.vm.$nextTick()
    

		// Then the expected fetch is called with correct url
		expect(fetch).toHaveBeenNthCalledWith(
			1,
			'https://api.example.com/test'
		);
	}); */

	it('should call axios.get function with https://httpbin.org.get when msg property is changed', async () => {
		//given the HelloWorld component is mounted
		const intance = shallowMount(HelloWorld);
		//when the msg property changes
		await intance.setProps({ msg: 'test' });
		//then the axios.get function is called with https://httpbin.org/get
		expect(axios.get).toHaveBeenNthCalledWith(1, 'https://httpbin.org/get');
	});
});
