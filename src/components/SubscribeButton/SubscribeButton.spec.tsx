import { render, screen, fireEvent } from '@testing-library/react'
import { signIn, useSession } from 'next-auth/react'
import { SubscribeButton } from '.'
import { useRouter } from 'next/router'

jest.mock('next-auth/react')
jest.mock('next/router')

describe('SubscribeButton component', () => {
    it('renders correctly', () => {
        const useSessionMocked = jest.mocked(useSession)
        useSessionMocked.mockReturnValueOnce({data: null, status: 'loading'})

        render(<SubscribeButton />)

        expect(screen.getByText('Subscribe Now')).toBeInTheDocument()
    })

    it('redirects user to sign in when not authenticated', () => {
        const signInMocked = jest.mocked(signIn)
        const useSessionMocked = jest.mocked(useSession)
        useSessionMocked.mockReturnValueOnce({data: null, status: 'loading'})

        render(<SubscribeButton />) 
        
        const subscribeButton = screen.getByText('Subscribe Now')

        fireEvent.click(subscribeButton)

        expect(signInMocked).toHaveBeenCalled()
    })

    it('redirect user to posts', () => {
        const useSessionMocked = jest.mocked(useSession);
        const useRouterMocked = jest.mocked(useRouter);
      
        const pushMock = jest.fn();
      
        useSessionMocked.mockReturnValueOnce({
          data: {
            user: { name: 'John Doe', email: 'john.doe@example.com' },
            expires: 'fake-expires',
            activeSubscription: 'fake-subscription'
          },
          status: 'authenticated',
        });
      
        useRouterMocked.mockReturnValueOnce({
          push: pushMock,
        } as any);

        render(<SubscribeButton />);
      
        const subscribeButton = screen.getByText('Subscribe Now');
      
        fireEvent.click(subscribeButton);
      
        expect(pushMock).toHaveBeenCalled();
      });
})