
    import javax.swing.*;
    import java.awt.*;
    import java.awt.event.*;

    public class Log extends JFrame {

    public static void main(String[] args) {
    Log frameTable = new Log();
    }

    JButton Login = new JButton("Login");
    JPanel panel = new JPanel();
    JTextField txuser = new JTextField(15);
    JPasswordField pass = new JPasswordField(15);

    Log(){
    super("Login Autentification");
    setSize(423,260);
    setLocation(500,280);
    panel.setLayout (null); 


    txuser.setBounds(224,30,150,20);
    pass.setBounds(224,75,150,20);
    Login.setBounds(172,148,80,20);

    panel.add(Login);
    panel.add(txuser);
    panel.add(pass);

    getContentPane().add(panel);
    
    JLabel lblNewLabel = new JLabel("Username:");
    lblNewLabel.setBounds(44, 30, 80, 17);
    panel.add(lblNewLabel);
    
    JLabel lblNewLabel_1 = new JLabel("Password:");
    lblNewLabel_1.setBounds(44, 72, 80, 20);
    panel.add(lblNewLabel_1);
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    setVisible(true);
    actionlogin();
    }

    public void actionlogin(){
    Login.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent ae) {
    String puname = txuser.getText();
    String ppaswd = pass.getText();
    if(puname.equals("burcu") && ppaswd.equals("brunel")) {
    newframe regFace =new newframe();
    regFace.setVisible(true);
    dispose();
    }else if(puname.equals("") && ppaswd.equals("")) {
        JOptionPane.showMessageDialog(null,"Please enter a valid username and password!");
        txuser.setText("");
        pass.setText("");
        txuser.requestFocus();
    } else {

    JOptionPane.showMessageDialog(null,"Wrong Password or Username! Please try again.");
    txuser.setText("");
    pass.setText("");
    txuser.requestFocus();
    }

    }
    });
    }
    }

